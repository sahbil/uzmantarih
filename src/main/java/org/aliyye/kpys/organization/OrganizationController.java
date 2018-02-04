package org.aliyye.kpys.organization;

import java.util.Collection;
import java.util.stream.Collectors;
import org.aliyye.kpys.core.entity.Organization;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * TODO: Write here something for other people.
 *
 * @author Xiabili Xiahilil on 02/02/2018.
 */
@RestController
public class OrganizationController {

    private OrganizationRepository organizationRepository;

    public OrganizationController (
        OrganizationRepository organizationRepository) {
        this.organizationRepository = organizationRepository;
    }

    @GetMapping("/api/organizations")
    public Collection<Organization> organizations () {
        return organizationRepository.findAll()
            .stream().collect(Collectors.toList());
    }
}
