package org.aliyye.kpys.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotBlank;

/**
 * This entity responsible the company in organization
 *
 * @author Xiabili Xiahilil on 12/01/2018.
 */
@Entity
public class Company extends BaseEntity {

    @Getter
    @Setter
    @NotBlank
    private String name;

    @Getter
    @Setter
    @NotBlank
    private String description;

    @Getter
    @Setter
    @Column(columnDefinition = "LONGTEXT")
    private String kml;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, targetEntity = Organization.class)
    @JoinColumn(name = "organization_id", foreignKey = @ForeignKey(name = "fk_company_organization"))
    @Getter
    @Setter
    private Organization organization;
}
