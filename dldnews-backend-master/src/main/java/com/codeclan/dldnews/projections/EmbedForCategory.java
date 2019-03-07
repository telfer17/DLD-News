package com.codeclan.dldnews.projections;

import com.codeclan.dldnews.models.Article;
import com.codeclan.dldnews.models.Category;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name = "embedForCategory", types = Category.class)
public interface EmbedForCategory {
    Long getId();
    String getLabel();
    List<Article> getArticles();
}
