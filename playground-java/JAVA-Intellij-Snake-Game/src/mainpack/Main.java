package mainpack;

import javax.swing.*;
import java.awt.*;

public class Main {
    public static void main (String[] args){
        JFrame obj = new JFrame();
        Gameplay gameplay = new Gameplay();

        obj.setBounds(100, 100, 820, 840);
        obj.setBackground(Color.WHITE);
        //obj.setResizable(false);
        obj.setTitle("Snake Game");

        obj.setVisible(true);
        obj.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        obj.add(gameplay);


    }
}
