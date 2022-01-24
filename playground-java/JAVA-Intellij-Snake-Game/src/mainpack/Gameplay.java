package mainpack;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;


public class Gameplay extends JPanel implements KeyListener, ActionListener {

    private ImageIcon titleImage;

    private int[] snakePLACEMENTX = new int[400];
    private int[] snakePLACEMENTY = new int[400];

    private boolean leftGoing = false;
    private boolean rightGoing = false;
    private boolean upGoing = false;
    private boolean downGoing = false;

    private ImageIcon snakeHeadImage;
    private ImageIcon snakeBodyImage;
    private ImageIcon snakeEmptyImage;

    private Timer timer;

    private int delay = 100;
    private int lengthOfSnake = 100;
    private int moves = 0;
    boolean setupFIRST = true;


    /**************************************************************************
     Default Things to setup for Class
     **************************************************************************/
    public Gameplay() {
        addKeyListener(this);
        setFocusable(true);
        setFocusTraversalKeysEnabled(false);
        timer = new Timer(delay, this);
        timer.start();

    }


    /**************************************************************************
     DEFINES
     **************************************************************************/
    public void paint(Graphics graphics) {
        if (setupFIRST) {
            snakeBodyImage = new ImageIcon("Body.png");
            snakeHeadImage = new ImageIcon("Head.png");
            snakeEmptyImage = new ImageIcon("Empty.png");
            graphics.setColor(Color.WHITE);
            setupFIRST = false;
        }

        

        for (int i = 0; i <= lengthOfSnake+1; i++) {
            if (i == 0) {
                snakeHeadImage.paintIcon(this, graphics, snakePLACEMENTX[i], snakePLACEMENTY[i]);
            } else if (i <= lengthOfSnake) {
                snakeBodyImage.paintIcon(this, graphics, snakePLACEMENTX[i], snakePLACEMENTY[i]);
            } else {
                snakeEmptyImage.paintIcon(this, graphics, snakePLACEMENTX[i], snakePLACEMENTY[i]);
            }
        }
        graphics.dispose();
    }


    /**************************************************************************
     Timer CALL
     **************************************************************************/
    @Override
    public void actionPerformed(ActionEvent e) {
        timer.start();


        for (int i = 399; i > 0; i--) {
            snakePLACEMENTX[i] = snakePLACEMENTX[i - 1];
            snakePLACEMENTY[i] = snakePLACEMENTY[i - 1];
        }


        if (rightGoing) {
            System.out.println("rightGoing");
            snakePLACEMENTX[0] = snakePLACEMENTX[1] + 40;

            if (snakePLACEMENTX[0] >= 800) {
                snakePLACEMENTX[0] = 0;
            }
        }

        if (leftGoing) {
            System.out.println("leftGoing");
            snakePLACEMENTX[0] = snakePLACEMENTX[1] - 40;

            if (snakePLACEMENTX[0] < 0) {
                snakePLACEMENTX[0] = 800;
            }
        }

        if (downGoing) {
            System.out.println("downGoing");
            snakePLACEMENTY[0] = snakePLACEMENTY[1] + 40;

            if (snakePLACEMENTY[0] >= 800) {
                snakePLACEMENTY[0] = 0;
            }
        }

        if (upGoing) {
            System.out.println("upGoing");
            snakePLACEMENTY[0] = snakePLACEMENTY[1] - 40;

            if (snakePLACEMENTY[0] < 0) {
                snakePLACEMENTY[0] = 800;
            }
        }
        repaint();
    }


    /**************************************************************************
     EMPTY
     **************************************************************************/
    @Override
    public void keyTyped(KeyEvent e) {

    }


    /**************************************************************************
     KEY PRESS TRIGGER
     **************************************************************************/
    @Override
    public void keyPressed(KeyEvent e) {

        if (e.getKeyCode() == KeyEvent.VK_RIGHT) {

            rightGoing = true;
            if (!leftGoing) {
                rightGoing = true;
            } else {
                rightGoing = false;
                leftGoing = true;
            }
            upGoing = false;
            downGoing = false;
        }

        if (e.getKeyCode() == KeyEvent.VK_LEFT) {

            leftGoing = true;
            if (!rightGoing) {
                leftGoing = true;
            } else {
                leftGoing = false;
                rightGoing = true;
            }
            upGoing = false;
            downGoing = false;
        }

        if (e.getKeyCode() == KeyEvent.VK_UP) {

            upGoing = true;
            if (!downGoing) {
                upGoing = true;
            } else {
                upGoing = false;
                downGoing = true;
            }
            leftGoing = false;
            rightGoing = false;
        }

        if (e.getKeyCode() == KeyEvent.VK_DOWN) {

            downGoing = true;
            if (!upGoing) {
                downGoing = true;
            } else {
                downGoing = false;
                upGoing = true;
            }
            leftGoing = false;
            rightGoing = false;
        }
    }


    /**************************************************************************
     EMPTY
     **************************************************************************/
    @Override
    public void keyReleased(KeyEvent e) {

    }
}
