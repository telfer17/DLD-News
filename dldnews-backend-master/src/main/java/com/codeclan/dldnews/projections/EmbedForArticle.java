package com.codeclan.dldnews.projections;

import com.codeclan.dldnews.models.Article;
import com.codeclan.dldnews.models.Author;
import com.codeclan.dldnews.models.Category;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name = "embedForArticle", types = Article.class)
public interface EmbedForArticle {

    Long getId();
    Author getAuthor();
    String getTitle();
    Date getDate();
    Category getCategory();
    String getSummary();
    String getfullText();
    String getMedia();
    int getReadCounter();
    boolean getBookmarked();


}
