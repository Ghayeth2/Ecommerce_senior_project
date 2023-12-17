package com.auction.app.core.utils.results;

public class SuccessDataResult<T> extends DataResult<T> {
    public SuccessDataResult(String message, T data) {
        super(message,true,data);
    }

    public SuccessDataResult() {
        super("Request is fine", true, null);
    }

    public SuccessDataResult(T data) {
        super(true, data);
    }

    public SuccessDataResult(T data,String message){
        super(message,true, data);
    }

}
