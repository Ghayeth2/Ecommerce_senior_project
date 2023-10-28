package com.auction.app.core.utils.results;

public class FailureResult extends Result{
    public FailureResult() {
        super(false);
    }


    public FailureResult(String message) {
        super(message, false);
    }
}
