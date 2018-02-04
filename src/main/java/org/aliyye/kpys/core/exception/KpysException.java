package org.aliyye.kpys.core.exception;

/**
 * Recoverable server error.
 *
 * @author Xiabili Xiahilil on 12/01/2018.
 */
public class KpysException extends Exception {

    private final String message;

    public KpysException (String message, Throwable cause) {
        super(message, cause);
        this.message = message;
    }

    @Override
    public final String getMessage () {
        return message;
    }

}
