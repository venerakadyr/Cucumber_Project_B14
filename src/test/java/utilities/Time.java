package utilities;

public class Time {
    public  static void pause(int sec){
        try{
            Thread.sleep(sec*1000);
        }catch(InterruptedException e){
            e.printStackTrace();
        }
    }
}
