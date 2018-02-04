package org.aliyye.kpys.core.entity;

import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.aliyye.kpys.core.entity.listener.OrganizationListener;
import org.hibernate.validator.constraints.NotBlank;

/**
 * Represents an area as an entity.
 *
 * @author Xiabili Xiahilil on 12/01/2018.
 */
@Entity
@EntityListeners(OrganizationListener.class)
public final class Organization extends BaseEntity {

    @Getter
    @Setter
    @NotBlank
    @Column(unique = true)
    @Size(min = 1, max = 100)
    private String name;

    @Getter
    @Setter
    @NotBlank
    private String description;

    @Getter
    @Setter
    @Column(columnDefinition = "LONGTEXT")
    private String kml;

    @Getter
    @OneToMany(mappedBy = "organization",
        cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
        },
        fetch = FetchType.LAZY)
    private Set<Company> companies;

    public void addChild (Company zone) {
        zone.setOrganization(this);
        this.companies.add(zone);
    }
}
