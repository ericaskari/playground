package gamepack;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Modality;
import javafx.stage.Stage;
import javafx.stage.StageStyle;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception{
        Parent root = FXMLLoader.load(getClass().getResource("gamingScreen.fxml"));
        primaryStage.setTitle("Hello World");
        primaryStage.initStyle(StageStyle.UNDECORATED);
        Scene scene = new Scene(root, 880, 880);
        scene.getStylesheets().add("/gamepack/gamestyle.css");
        //primaryStage.initModality(Modality.APPLICATION_MODAL);
        //primaryStage.setResizable(true);

        primaryStage.setScene(scene);
        primaryStage.show();
    }


    public static void main(String[] args) {
        launch(args);
    }
}
