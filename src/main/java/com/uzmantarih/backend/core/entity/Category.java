package com.uzmantarih.backend.core.entity;

import javax.persistence.MappedSuperclass;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.NotBlank;

/**
 * This entity responsible the categories that used in the project
 *
 * @author Xiabili Xiahilil on 04/02/2018.
 */
@MappedSuperclass
@ToString
@EqualsAndHashCode
public class Category extends BaseEntity {

    @Getter
    @Setter
    @NotBlank
    private String name;

    @Getter
    @Setter
    private String description;
}
