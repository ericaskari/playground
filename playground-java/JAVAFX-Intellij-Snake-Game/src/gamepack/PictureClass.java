package gamepack;

import javafx.scene.image.Image;
import javafx.scene.image.ImageView;

public class PictureClass {
    ImageView imageView = new ImageView();
    Image image = new Image("gamepack/icon1.png");

    Image imagefood = new Image("gamepack/icon2.png");



    PictureClass() {

    }

    public ImageView getImage() {
        imageView.setImage(image);
        return imageView;
    }

    public void setImage(ImageView imageView) {
        this.imageView = imageView;
    }

    public ImageView getImageFood() {
        imageView.setImage(imagefood);
        return imageView;
    }

}
