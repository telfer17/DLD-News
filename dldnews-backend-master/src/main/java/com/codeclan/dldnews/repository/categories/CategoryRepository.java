package com.codeclan.dldnews.repository.categories;

import com.codeclan.dldnews.models.Category;
import com.codeclan.dldnews.projections.EmbedForCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(excerptProjection = EmbedForCategory.class)
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
