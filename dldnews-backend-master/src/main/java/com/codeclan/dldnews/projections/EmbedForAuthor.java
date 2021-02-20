package com.codeclan.dldnews.projections;

import com.codeclan.dldnews.models.Article;
import com.codeclan.dldnews.models.Author;
import com.codeclan.dldnews.models.Category;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name = "embedForAuthor", types = Author.class)
public interface EmbedForAuthor {
    Long getId();
    String getName();
    List<Article> getArticles();
}
