package sample;

import com.jfoenix.controls.JFXButton;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Scene;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.Pane;
import javafx.scene.text.Text;
import javafx.stage.Modality;
import javafx.stage.Stage;
import newPatientPagePackage.Newpatient;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ResourceBundle;


public class Controller implements Initializable {

    @FXML
    public TableView<Patient> mytable;
    @FXML
    private TableColumn<Patient, String> lastname;//Full name
    @FXML
    private TableColumn<Patient, String> firstname;//Social Id
    @FXML
    private TableColumn<Patient, String> socialid;//sex
    @FXML
    private TableColumn<Patient, String> sex;//
    @FXML
    private TableColumn<Patient, String> birthday;
    @FXML
    private TableColumn<Patient, String> dateofregistration;
    @FXML
    private TableColumn<Patient, String> phonenumber;
    @FXML
    private TableColumn<Patient, String> city;
    @FXML
    private TableColumn<Patient, String> address;
    @FXML
    private JFXButton b1;
    @FXML
    private JFXButton b2;
    @FXML
    private JFXButton b3;
    @FXML
    private JFXButton b4;
    @FXML
    private TextField t1;
    @FXML
    private TextField t2;
    @FXML
    private TextField t3;
    @FXML
    private Text text;//FXML ELEMENTS///
    /////////////////////
    TableData tableData = new TableData();
    @Override
    public void initialize(URL location, ResourceBundle resources) {
        /////////////////////

        lastname.setCellValueFactory(new PropertyValueFactory<Patient, String>("lastname"));
        firstname.setCellValueFactory(new PropertyValueFactory<Patient, String>("firstname"));
        socialid.setCellValueFactory(new PropertyValueFactory<Patient, String>("socialid"));
        sex.setCellValueFactory(new PropertyValueFactory<Patient, String>("sex"));
        birthday.setCellValueFactory(new PropertyValueFactory<Patient, String>("birthday"));
        dateofregistration.setCellValueFactory(new PropertyValueFactory<Patient, String>("dateofregistration"));
        phonenumber.setCellValueFactory(new PropertyValueFactory<Patient, String>("phonenumber"));
        city.setCellValueFactory(new PropertyValueFactory<Patient, String>("city"));
        address.setCellValueFactory(new PropertyValueFactory<Patient, String>("address"));//TABLE ELEMENTS//
        /////////////////////
        mytable.setItems(tableData.allPatientCahceList());
        b1.setStyle(Newpatient.formatbutton);
        b2.setStyle(Newpatient.formatbutton);
        b3.setStyle(Newpatient.formatbutton);
        b4.setStyle(Newpatient.formatbutton);

        System.out.println("Code was here");
        getDatafromDatabase();
    }
    public void newPatientButtonPressed() {
        newPatientFormOpener();
    }
    public void deleteExistedPatient() {
        if (!(t3.getText().isEmpty())) {
            for (int j = tableData.allPatientCahceList().size() - 1; j >= 0; j--) {
                if (tableData.allPatientCahceList().get(j).getSocialid().equals(t3.getText())) {
                    tableData.allPatientCahceList().remove(j);
                    mytable.getItems();
                }
            }
        }

    }
    public void exitButtonPressed() {
        Stage stage =(Stage)this.b3.getScene().getWindow();
        stage.close();
        System.exit(0);

    }
    public void newPatientFormOpener() {
        try {
            Stage stage = new Stage();
            FXMLLoader loader = new FXMLLoader();
            InputStream inputStream = getClass().getResource("/newPatientPagePackage/newpatient.fxml").openStream();
            Pane pane = loader.load(inputStream);

            Scene scene = new Scene(pane);
            stage.setScene(scene);
            scene.getStylesheets().add("/css/stylesheet.css");
            stage.setTitle("New Patient");
            stage.setResizable(true);
            stage.initModality(Modality.APPLICATION_MODAL);
            stage.showAndWait();
            getDatafromDatabase();

        } catch (IOException ex) { ex.printStackTrace(); }
    }
    public void getDatafromDatabase() {
            DatabaseClass databaseClass = new DatabaseClass();
            if (!databaseClass.isDataBaseConnected()) {
                System.out.println("DB is connected");
                mytable.getItems().removeAll(tableData.allPatientCahceList());
                mytable.setItems(databaseClass.loadAllPatientList());
            } else {
                System.out.println("DB Is not connected");
            }
    }


}














