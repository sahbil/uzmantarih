package org.aliyye.kpys.core.entity.listener;

import javax.persistence.PreRemove;
import org.aliyye.kpys.core.entity.Organization;
import org.aliyye.kpys.core.exception.KpysNotRemovableException;

/**
 * TODO: Rewite here something for other people.
 *
 * @author Xiabili Xiahilil on 12/01/2018.
 */
public class OrganizationListener {

    @PreRemove
    private void preRemove (Organization organization) throws KpysNotRemovableException {
        System.out.println("preRemove: " + organization.getCompanies().toArray().length);
        if (!organization.getCompanies().isEmpty()) {
            throw new KpysNotRemovableException("Linked zone exists.");
        }
    }
}
