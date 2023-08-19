package sample;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.Initializable;

import java.net.URL;
import java.util.ResourceBundle;

public class TableData implements Initializable {
    private ObservableList<Patient> patientCahceList = FXCollections.observableArrayList();


    TableData() {

    }
    @Override
    public void initialize(URL location, ResourceBundle resources) {

    }

    public void addPatientCahceList(Patient patient) {
        patientCahceList.add(patient);
    }
    public void addAllPatientCahceList(ObservableList<Patient> listofPatientinDatabase) {
        patientCahceList.addAll(listofPatientinDatabase);
    }

    public ObservableList<Patient> allPatientCahceList() {
        return patientCahceList;
    }
}
