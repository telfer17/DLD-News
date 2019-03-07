package com.codeclan.dldnews.repository.authors;

import com.codeclan.dldnews.models.Author;
import com.codeclan.dldnews.projections.EmbedForAuthor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(excerptProjection = EmbedForAuthor.class)
public interface AuthorRepository extends JpaRepository<Author, Long> {
}
