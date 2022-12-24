package com.ikujo.stackoverflow.domain.article.repository;

import com.ikujo.stackoverflow.domain.article.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ArticleRepository extends JpaRepository<Article, Long> {
}
