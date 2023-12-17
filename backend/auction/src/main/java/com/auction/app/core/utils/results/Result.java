package com.auction.app.core.utils.results;

public class Result {
    private String message;
    private boolean isSuccess; // isSuccess = status

    public Result(String message, boolean isSuccess) {
        this.message = message;
        this.isSuccess = isSuccess;
    }

    public Result(boolean isSuccess) {
        this.isSuccess = isSuccess;
    }

    public Result(String message) {
        this.message = message;
    }

    public String getMessage(){
        return this.message;
    }

    public Result() {
    }

    public boolean getIsSuccess(){
        return this.isSuccess;
    }
}
