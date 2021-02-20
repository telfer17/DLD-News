package com.codeclan.dldnews.repository.articles;

import com.codeclan.dldnews.models.Article;
import com.codeclan.dldnews.projections.EmbedForArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(excerptProjection = EmbedForArticle.class)
public interface ArticleRepository extends JpaRepository<Article, Long> {
}
