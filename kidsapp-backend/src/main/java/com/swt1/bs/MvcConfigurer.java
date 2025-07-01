package com.swt1.bs;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class MvcConfigurer implements WebMvcConfigurer
{
  @Override
  public void configureContentNegotiation(ContentNegotiationConfigurer configurer)
  {
    // Setzt den Default-Content-Type
    configurer.defaultContentType(MediaType.APPLICATION_JSON);
  }
}
