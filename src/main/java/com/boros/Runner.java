package com.boros;

import com.boros.account.Account;
import com.boros.account.AccountRepository;
import com.boros.company.Address;
import com.boros.company.Company;
import com.boros.company.CompanyRepository;
import com.boros.skill.Skill;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
@EnableAutoConfiguration
public class Runner {

    public static void main(String[] args) {
        SpringApplication.run(Runner.class, args);
    }

    @Bean
    public ApplicationRunner applicationRunner(CompanyRepository companyRepository, AccountRepository accountRepository) {
        return args -> {
            Skill skill = new Skill();
            skill.setName("Math");
            skill.setRating(2);

            Skill skill2 = new Skill();
            skill.setName("Programs");
            skill.setRating(4);

            Skill skill3 = new Skill();
            skill.setName("Music");
            skill.setRating(3);

            Company company = new Company();
            company.setName("Google");
            company.setImageUrl("https://madeby.google.com/static/images/google_g_logo.svg");
            company.setDescription("Google is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies");
            company.setAddress(new Address("Ashburn", 59.9, 42.33));
            company.setSkills(Arrays.asList(skill, skill2));

            Company company2 = new Company();
            company2.setName("Microsoft");
            company2.setImageUrl("https://compass-ssl.microsoft.com/assets/bc/84/bc84e95b-76b9-4b24-ad5f-9748a2d75b1b.svg?n=microsoft_account_logo_color.svg");
            company2.setDescription("Google is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies");
            company2.setAddress(new Address("Malta", 29.9, 72.33));

            Company company3 = new Company();
            company3.setName("Google");
            company3.setImageUrl("https://compass-ssl.microsoft.com/assets/bc/84/bc84e95b-76b9-4b24-ad5f-9748a2d75b1b.svg?n=microsoft_account_logo_color.svg");
            company3.setDescription("Google is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies");
            company3.setAddress(new Address("Malta", 29.9, 72.33));

            Company company4 = new Company();
            company4.setName("Microsoft");
            company4.setImageUrl("https://compass-ssl.microsoft.com/assets/bc/84/bc84e95b-76b9-4b24-ad5f-9748a2d75b1b.svg?n=microsoft_account_logo_color.svg");
            company4.setDescription("Google is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies");
            company4.setAddress(new Address("Malta", 29.9, 72.33));


            companyRepository.save(company);
            companyRepository.save(company2);
            companyRepository.save(company3);
            companyRepository.save(company4);

            Account account = new Account();
            account.setEmail("oross@gmail.com");
            account.setPassword("121212");
            account.setBirthDate("1997 12 12");
            account.setDescription("Strong Junior FullStack Developer");
            account.setFirstName("Bogdan");
            account.setLastName("Oros");

            Account friend = new Account();
            friend.setEmail("kek");
            friend.setBirthDate("1992 12 12");
            friend.setDescription("Middle Java Developer");
            friend.setLastName("Gimi");
            friend.setFirstName("Hi");

            Account friend2 = new Account();
            friend2.setEmail("kek2");
            friend2.setBirthDate("1992 12 12");
            friend2.setDescription("Middle Java Developer");
            friend2.setLastName("Andrew");
            friend2.setFirstName("Sush");

            account.setAccounts(Arrays.asList(friend, friend2));

            accountRepository.save(account);


        };
    }

}
