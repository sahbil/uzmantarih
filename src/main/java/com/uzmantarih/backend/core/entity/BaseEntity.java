package com.uzmantarih.backend.core.entity;


import static javax.persistence.TemporalType.TIMESTAMP;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

/**
 * The base class for all entities.
 *
 * @author Xiabili Xiahilil on 12/01/2018.
 */
@MappedSuperclass
@ToString
@EqualsAndHashCode
public class BaseEntity implements Serializable {

    /**
     * The primary key in the database (SQL "PRIMARY KEY").
     *
     * NOTE: It is not named 'id', because id could be used for public identification.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    private Long primaryKey;

    @Column(nullable = false, updatable = false)
    @CreatedDate
    @Temporal(TIMESTAMP)
    private Date createAt;

    @Column(nullable = false)
    @Temporal(TIMESTAMP)
    @LastModifiedDate
    private Date updateAt;

    /**
     * @return True when entity was persisted in database.
     */
    public final boolean isPersisted () {
        return primaryKey != 0;
    }
}
