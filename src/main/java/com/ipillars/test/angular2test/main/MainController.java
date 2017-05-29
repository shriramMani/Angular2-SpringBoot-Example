package com.ipillars.test.angular2test.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by shriram on 4/2/2017.
 */
@Controller
@EnableAutoConfiguration
public class MainController {

    public static void main(String[] args) {
        SpringApplication.run(MainController.class, args);
    }

    @RequestMapping("/webStatus")
    @ResponseBody
    String home() {
        return "Server is running";
    }

}
