package org.aliyye.kpys.organization;

import org.aliyye.kpys.core.entity.Organization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Organization repository in reactive way
 *
 * @author Xiabili Xiahilil on 02/02/2018.
 */
@RepositoryRestResource
public interface OrganizationRepository extends JpaRepository<Organization, Long> {

}
