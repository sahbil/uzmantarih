package com.uzmantarih.backend.core.exception;

/**
 * Recoverable server error.
 *
 * @author Xiabili Xiahilil on 12/01/2018.
 */
public class UzmanTarihException extends Exception {

    private final String message;

    public UzmanTarihException (String message, Throwable cause) {
        super(message, cause);
        this.message = message;
    }

    @Override
    public final String getMessage () {
        return message;
    }

}
