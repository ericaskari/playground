package newPatientPagePackage;

import com.jfoenix.controls.JFXButton;
import com.jfoenix.controls.JFXComboBox;
import com.jfoenix.controls.JFXTextField;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.text.Text;
import javafx.stage.Stage;
import sample.DatabaseClass;
import sample.Patient;

import java.net.URL;
import java.util.ResourceBundle;

public class Newpatient implements Initializable {
    @FXML
    private JFXButton enter;
    @FXML
    private JFXButton cancel;
    @FXML
    private JFXTextField lastname;
    @FXML
    private JFXTextField firstname;
    @FXML
    private JFXTextField socialid;
    @FXML
    private JFXTextField phonenumber;
    @FXML
    private JFXTextField city;
    @FXML
    private JFXTextField address;
    @FXML
    private JFXTextField postalcode;
    @FXML
    private JFXComboBox<String> sex = new JFXComboBox<String>();
    @FXML
    private JFXTextField dateofbirth;
    @FXML
    private JFXTextField dateofregistration;
    @FXML
    private Text systext;


    public static final String formatString = "" +
            " -fx-font-family: Segoe UI semibold ;" +
            " -fx-style: Regular; " +
            " -fx-base: #AE3522; " +
            " -fx-text-fill: white; " +
            " -fx-font-size: 16";

    public static final String formatbutton = "" +
            "-fx-font-family: Segoe UI semibold; " +
            "-fx-style: Regular; " +
            "-fx-base: #AE3522; " +
            "-fx-text-fill: white; " +
            "-fx-font-size: 16";

    public static final String formatcomboBox="" +
            "-fx-font-family: Segoe UI semibold; " +
            "-fx-style: Regular; " +
            "-fx-base: #62929a; " +
            "-fx-text-fill: #62929a; " +
            "-fx-font-size: 16";



    public Newpatient() {
        //Controller controller = new Controller();
        //controller.newPatientForm();
    }

    public void initialize(URL location, ResourceBundle resources) {

        sex.getItems().addAll("Male","Female");
        sex.setValue("Male");
        dateofbirth.setEditable(true);
        dateofregistration.setEditable(true);

        firstname.setStyle(formatString);
        lastname.setStyle(formatString);
        socialid.setStyle(formatString);
        sex.setStyle(formatcomboBox);
        dateofbirth.setStyle(formatString);
        dateofregistration.setStyle(formatString);
        phonenumber.setStyle(formatString);
        city.setStyle(formatString);
        address.setStyle(formatString);
        postalcode.setStyle(formatString);

        systext.setText(formatString);
        enter.setStyle(formatbutton);
        cancel.setStyle(formatbutton);

        firstname.setText("Andrew");
        lastname.setText("Aska");
        socialid.setText("210599-7111");
        dateofbirth.setText("21.05.1999");
        dateofregistration.setText("11.09.1999");
        phonenumber.setText("asdasdd");
        city.setText("Porvoo");
        address.setText("Pormestarinkatu 14C89");
        postalcode.setText("06100");

    }

    public void cancelButtonPressed() {
        Stage stage = (Stage) this.cancel.getScene().getWindow();
        stage.close();
    }

    public void enterButtonPressed() {

        if (fieldsAreNotEmpty())
        {
            if (phoneNumberIsFormatted(phonenumber.getText())) {


                Patient patient = new Patient
                        (
                                (firstname.getText(0, 1).toUpperCase() + firstname.getText(1, firstname.getText().length()).toLowerCase()),
                                (lastname.getText(0, 1).toUpperCase() + lastname.getText(1, lastname.getText().length()).toLowerCase()),
                                socialid.getText(),
                                sex.getValue(),
                                dateofbirth.getText(),
                                dateofregistration.getText(),
                                phonenumber.getText(),
                                (city.getText(0, 1).toUpperCase() + city.getText(1, city.getText().length()).toLowerCase()),
                                (address.getText(0, 1).toUpperCase() + address.getText(1, address.getText().length()).toLowerCase()),
                                postalcode.getText()
                        );

                //Controller.getNewPatientAndSaveIt(patient);
                DatabaseClass databaseClass = new DatabaseClass();


                databaseClass.addNewPatient(patient);


                //Controller.reloadTableData();
                Stage stage = (Stage) this.cancel.getScene().getWindow();
                stage.close();
            } else { systext.setText("Please Check the Phone Number"); }


        }else {
            systext.setText("Please Fill the Form Completely");

        }
    }


    public boolean fieldsAreNotEmpty() {
        if (!(firstname.getText().isEmpty())) {
            if (!(lastname.getText().isEmpty())) {
                if (!(socialid.getText().isEmpty())) {
                    if (!(dateofbirth.getText().isEmpty())) {
                        if (!(dateofregistration.getText().isEmpty())) {
                            if (!(phonenumber.getText().isEmpty())) {
                                if (!(city.getText().isEmpty())) {
                                    if (!(address.getText().isEmpty())) {
                                        if (!(postalcode.getText().isEmpty())) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    public boolean phoneNumberIsFormatted(String string) {
        char[] inputPhoneNumber = string.toCharArray();
        String validPhoneNumber = "0123456789-+";
        for (char c : inputPhoneNumber) {
            if (validPhoneNumber.indexOf(c) == -1) {
                return false;
            }
        }

        return true;
    }




}
