package com.boros.company;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.function.Supplier;

@RestController
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyRepository repository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/companies")
    public List<Company> getAllCompanies() {
        return repository.findAll();
    }

    @GetMapping("/api/companies/{id}")
    public Company getCompanyById(@PathVariable(name = "id") Long id) {
        return repository.findOne(id);
    }

    @PostMapping("/api/companies")
    public Company createCompany(@RequestBody Company company) {
        return repository.save(company);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/api/companies/{id}")
    public void deleteCompany(@PathVariable(name = "id") Long id) {
        repository.delete(id);
    }

    @Transactional
    @PatchMapping("/api/companies/{id}")
    public void updateCompany(@PathVariable(name = "id") long id,
                              @RequestBody Company company) {
        new CompanyMerger().merge(company, repository.findOne(id));
    }

    @PutMapping("api/companies/{id}")
    public void setCompany(@PathVariable(name = "id") long id,
                           @RequestBody Company company) {
        if (company.getId() == null) {
            company.setId(id);
        }
        repository.save(company);
    }

    private class CompanyMerger {

        public void merge(Company from, Company to) {
            mergeIfNotNull(to::setName, from::getName);
            mergeIfNotNull(to::setAddress, from::getAddress);
            mergeIfNotNull(to::setSkills, from::getSkills);
        }

        private  <T> void mergeIfNotNull(Consumer<T> consumer, Supplier<T> supplier) {
            Optional.ofNullable(supplier.get()).ifPresent(consumer);
        }

    }

}
