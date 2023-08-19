package gamepack;

import com.jfoenix.controls.JFXButton;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Pane;
import javafx.scene.layout.VBox;
import javafx.scene.text.Text;
import javafx.stage.Stage;

import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.net.URL;
import java.util.ArrayList;
import java.util.Random;
import java.util.ResourceBundle;
import java.util.stream.IntStream;

import static javafx.scene.input.KeyCode.*;

public class GamingClass implements Initializable {

    @FXML
    private AnchorPane anchorPane;
    @FXML
    private JFXButton start;
    @FXML
    private JFXButton quit;
    @FXML
    private Text text;
    @FXML
    private VBox vBox;
    @FXML
    private GridPane gridPane;
    @FXML
    private Pane showpane;

    private ArrayList<Integer> snakeBody = new ArrayList<Integer>();
    private ArrayList<PictureClass> arrayList = new ArrayList<>();
    private Timer timer;
    private KeyCode currentKeyCode = RIGHT;
    private KeyCode lastKeyCode;
    private KeyCode readedCode;
    private boolean moved = false;
    private boolean foodIsEaten = true;
    private int[] forbiddenBlocksUP = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21};
    private int[] forbiddenBlocksDOWN = {462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483};
    private int[] forbiddenBlocksLEFT = {22,44,66,88,110,132,154,176,198,220,242,264,286,308,330,352,374,396,418,440};
    private int[] forbiddenBlocksRIGHT = {43,65,87,109,131,153,175,197,219,241,263,285,307,329,351,373,395,417,439,461};
    private final int TOTALX = 22;
    private final int TOTALY = 22;
    private final int TOTALCUBE = TOTALX * TOTALY;
    private int newChild = 28;
    private int oldChild = 24;
    private int foodPlace;
    private int snakeLength = 3;
    private int delay = 200;
    private double xOffset = 0;
    private double yOffset = 0;
    boolean permit =false;
     int robot = 0;

    @Override
    public void initialize(URL location, ResourceBundle resources) {

        anchorPane.setOnMousePressed(event -> {
            xOffset = event.getSceneX();
            yOffset = event.getSceneY();
        });
        anchorPane.setOnMouseDragged(event -> {
            anchorPane.getScene().getWindow().setX(event.getScreenX() - xOffset);
            anchorPane.getScene().getWindow().setY(event.getScreenY() - yOffset);
            anchorPane.getScene().getWindow().setOpacity(0.8);
        });
        anchorPane.setOnMouseReleased(event -> {
            anchorPane.getScene().getWindow().setOpacity(1);
            // vBox.getChildren().add(snakeHead);
        });


        for (int counter = 0; counter < TOTALCUBE; counter++) {
            arrayList.add(new PictureClass());
        }
        //snakeBody.add(0);

            snakeBody.add(27);
            snakeBody.add(26);
            snakeBody.add(25);




        int countIT = 0;

        for (int counterY = 0; counterY < TOTALY; counterY++) {
            for (int counterX = 0; counterX < TOTALX; counterX++) {
                gridPane.add(arrayList.get(countIT).getImage(), counterX, counterY);

                arrayList.get(countIT).getImage().setOpacity(0);
                countIT++;
                if (countIT >= TOTALCUBE) {
                    countIT = 0;
                }
            }
        }

        for (int i : forbiddenBlocksUP) {
            arrayList.get(i).getImage().setOpacity(0.4);
        }
        for (int i : forbiddenBlocksDOWN) {
            arrayList.get(i).getImage().setOpacity(0.4);
        }
        for (int i : forbiddenBlocksLEFT) {
            arrayList.get(i).getImage().setOpacity(0.4);
        }
        for (int i : forbiddenBlocksRIGHT) {
            arrayList.get(i).getImage().setOpacity(0.4);
        }


        KeyHandling();
        gameTimer();

    }

    public void KeyHandling() {
        anchorPane.setOnKeyPressed(event -> {
            readedCode = event.getCode();
            if (readedCode == UP | readedCode == DOWN |readedCode == LEFT |readedCode == RIGHT){
                if (readedCode != currentKeyCode & readedCode != giveMeReverse(currentKeyCode) & moved) {
                    currentKeyCode = readedCode;
                    moved = false;
                   // System.out.println("entered: " + currentKeyCode);
                }
            }
        });
    }

    public boolean selfDestroyCheck() {
                for (int i = 0; i < snakeBody.size(); i++) {

                    for (int j = 0; j < snakeBody.size(); j++) {

                        if ((i != j) & (arrayList.get(snakeBody.get(i)).getImage().getOpacity()==1)&(snakeBody.get(i).equals(snakeBody.get(j)))) {
                            text.setText("GAME OVER");
                            return true;
                        }
                }
                }


        return false;

    }

    public void gameTimer() {

        timer = new Timer(delay, e -> {
            anchorPane.setDisable(true);
            oldChild = newChild;
            switch (currentKeyCode) {
                case UP:
                    newChild -= TOTALY;
                    break;
                case DOWN:
                    newChild += TOTALY;
                    break;
                case LEFT:
                    newChild--;
                    break;
                case RIGHT:
                    newChild++;
                    break;
            }
            newChild = borderControl(newChild);
            snakeBody.add(0, newChild);

            arrayList.get(snakeBody.get(snakeLength)).getImage().setOpacity(0);
            for (int i = snakeBody.size()-1; i > snakeLength; i--) {
                snakeBody.remove(i);
            }

            if (selfDestroyCheck()) {
                resetALL();
            }
            if (newChild == foodPlace) {
                snakeLength++;
                foodIsEaten = true;
            }
            if (snakeLength >= 400) {
                winning();
            }
            if (foodIsEaten) {
                //System.out.println("SIZE:" + snakeBody.size() + " length: " + snakeLength);
                //System.out.println(" ");
                foodMaker();
                foodIsEaten = false;
            }





            //arrayList.get(snakeBody.get(snakeBody.size() - 1)).getImage().setOpacity(0);
            //snakeBody.add(oldChild);



            try {

                for (int j = 0; j <= snakeLength; j++) {
                    arrayList.get(snakeBody.get(0)).getImage().setOpacity(1);
                }

                moved = true;


            } catch (IndexOutOfBoundsException asd) {
                asd.printStackTrace();
                newChild = 21;
                oldChild = 20;
                lastKeyCode = DOWN;
                currentKeyCode = RIGHT;
            }
            anchorPane.setDisable(false);
            if (permit) {

            robot++;
            //System.out.println("ROBOT: " + robot);
            if (robot >= 19) {
                currentKeyCode = DOWN;
                if (robot >= 20) {
                    currentKeyCode=RIGHT;
                    robot = 0;

                }

            }
            }

        });



    }

    public void foodMaker() {
        Random random = new Random();
        boolean containsUP;
        boolean containsDOWN;
        boolean containsLEFT;
        boolean containsRIGHT;
        boolean containsSnake;


        do {
            containsDOWN = false;
            containsUP = false;
            containsLEFT = false;
            containsRIGHT = false;
            containsSnake = false;

            foodPlace = random.nextInt(442);
            int finalFoodPlace = foodPlace;
            containsUP = IntStream.of(forbiddenBlocksUP).anyMatch(x -> x == finalFoodPlace);
            containsDOWN = IntStream.of(forbiddenBlocksDOWN).anyMatch(x -> x == finalFoodPlace);
            containsLEFT = IntStream.of(forbiddenBlocksLEFT).anyMatch(x -> x == finalFoodPlace);
            containsRIGHT = IntStream.of(forbiddenBlocksRIGHT).anyMatch(x -> x == finalFoodPlace);
            for (int i = 0; i < snakeBody.size(); i++) {
                if (finalFoodPlace == snakeBody.get(i)) {
                    containsSnake = true;
                    break;
                }
            }
             //for (int i = 0; i < snakeBody.size(); i++) {
            //System.out.println("i : " +i + " : "+ snakeBody.get(i)+" : " +arrayList.get(snakeBody.get(i)).getImage().getOpacity());

           // }
           // System.out.println("FOOD PLACE : " + foodPlace);

        } while (containsUP | containsDOWN | containsLEFT | containsRIGHT | containsSnake);
        //System.out.println("FINAL FOOD PLACE : " + foodPlace);

        arrayList.get(foodPlace).getImageFood().setOpacity(1);
    }

    public KeyCode giveMeReverse(KeyCode keyCode) {
        //System.out.println(upGoing + " " + downGoing +" " + leftGoing + " " +rightGoing);
        if (keyCode == UP) return DOWN;
        else if (keyCode == DOWN) return UP;
        else if (keyCode == RIGHT) return LEFT;
        else if (keyCode == LEFT) return RIGHT;
        return DOWN;


    }
    /**
     * @param num input number that should be checked for being on forbidden places
     * @return a new version of input that is corrected or same original input {@code int}
     */
    public int borderControl(int num) {
        boolean containsUP = false;
        boolean containsDOWN = false;
        boolean containsLEFT = false;
        boolean containsRIGHT = false;
        switch (currentKeyCode) {
            case UP:
                containsUP = IntStream.of(forbiddenBlocksUP).anyMatch(x -> x == num);
                break;
            case DOWN:
                containsDOWN = IntStream.of(forbiddenBlocksDOWN).anyMatch(x -> x == num);
                break;
            case LEFT:
                containsLEFT = IntStream.of(forbiddenBlocksLEFT).anyMatch(x -> x == num);
                break;
            case RIGHT:
                containsRIGHT = IntStream.of(forbiddenBlocksRIGHT).anyMatch(x -> x == num);
                break;
        }

        if (containsUP) {
            return num + 440;
        } else if (containsDOWN) {
            return num - 440;
        } else if (containsLEFT) {
            return num + 20;
        } else if (containsRIGHT) {
            return num - 20;
        } else {
            return num;
        }


    }

    public void resetALL() {
        timer.stop();
         foodIsEaten = true;

        start.setDisable(false);
        quit.setDisable(false);
        vBox.setOpacity(1);

        /*/////////////////////////////////////////
        >>>>>>>Explanation<<<<<<<
        *//////////////////////////////////////////
        for (int i = snakeBody.size() - 1; i > 3; i--) {
            snakeBody.remove(i);
        }
        snakeLength = 3;
        for (int i = 0; i <= 483; i++) {
            arrayList.get(i).getImage().setOpacity(0);

        }
        //foodMaker();
        for (int i : forbiddenBlocksUP) {
            arrayList.get(i).getImage().setOpacity(0.4);
        }
        for (int i : forbiddenBlocksDOWN) {
            arrayList.get(i).getImage().setOpacity(0.4);
        }
        for (int i : forbiddenBlocksLEFT) {
            arrayList.get(i).getImage().setOpacity(0.4);
        }
        for (int i : forbiddenBlocksRIGHT) {
            arrayList.get(i).getImage().setOpacity(0.4);
        }
    }

    public void starting() {
        resetALL();
        start.setDisable(true);
        quit.setDisable(true);
        vBox.setOpacity(0);
        timer.start();


    }

    public void quiting() {
        Stage stage = (Stage) this.start.getScene().getWindow();
        stage.close();
        System.exit(0);

    }

    public void winning() {
        timer.stop();
        start.setDisable(false);
        quit.setDisable(false);
        vBox.setOpacity(1);
        text.setText("YOU WON!");

    }


}
