package com.auction.app.core.utils.results;

public class DataResult<T> extends Result {
    private T data;


    public DataResult(String message, boolean isSuccess, T data) {
        super(message, isSuccess);
        this.data = data;
    }

    public DataResult(T data) {
        super();
        this.data = data;
    }

    public DataResult(boolean isSuccess, T data) {
        super(isSuccess);
        this.data = data;
    }

    public DataResult(String message, T data) {
        super(message);
        this.data = data;
    }
    public DataResult(String message,boolean isSuccess){
        super(message,isSuccess);
    }
    public T getData(){
        return this.data;
    }
}
