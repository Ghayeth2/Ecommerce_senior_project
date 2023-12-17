package com.auction.app.core.utils.results;

public class FailureDataResult<T> extends DataResult<T> {
    public FailureDataResult(String message, T data) {
        super(message,false,data);
    }
    public FailureDataResult(String message){
        super(message,false,null);
    }

    public FailureDataResult() {
        super("Bad request", false, null);
    }

    public FailureDataResult(T data) {
        super(false, data);
    }

}
