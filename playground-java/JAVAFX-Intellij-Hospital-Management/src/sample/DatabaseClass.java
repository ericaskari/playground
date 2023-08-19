package sample;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.Initializable;
import loginpackage.dbUtil.DatabaseConnection;
import newPatientPagePackage.Newpatient;

import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ResourceBundle;

public class DatabaseClass implements Initializable {
    Connection connection;
    ObservableList<Patient> data;
    private String patientsql = "SELECT * FROM patientlist";

    public DatabaseClass() {    // Constructor Part

    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        try {
            this.connection = DatabaseConnection.getConnection();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        if (this.connection == null) {
            System.exit(1);
        }
    }

    public boolean isDataBaseConnected() {
        return this.connection != null;
    }


    public boolean patientSearch(
            String lastname,
            String socialID) throws Exception {
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        String sql = "SELECT * FROM PatientList where lastname = ? and socialid = ? ";

        try {
            preparedStatement = this.connection.prepareStatement(sql);
            preparedStatement.setString(1, lastname);
            preparedStatement.setString(2, socialID);

            resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                return true;
            }
            return false;
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        } finally {
            preparedStatement.close();
            resultSet.close();
        }

    }

    public boolean addNewPatient(Patient patient) {

        String sqlnewPatientInsert = "INSERT INTO PatientList(firstname,lastname,socialID,sex,dateofbirth,dateofregistration,phonenumber,city,address,postalcode) VALUES(?,?,?,?,?,?,?,?,?,?)";

        try {
            Connection connection = DatabaseConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(sqlnewPatientInsert);
            preparedStatement.setString(1, patient.getFirstname());
            preparedStatement.setString(2, patient.getLastname());
            preparedStatement.setString(3, patient.getSocialid());
            preparedStatement.setString(4, patient.getSex());
            preparedStatement.setString(5, patient.getBirthday());
            preparedStatement.setString(6, patient.getDateofregistration());
            preparedStatement.setString(7, patient.getPhonenumber());
            preparedStatement.setString(8, patient.getCity());
            preparedStatement.setString(9, patient.getAddress());
            preparedStatement.setString(10,patient.getPostalcode());
            preparedStatement.execute();
            connection.close();
            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }


    public ObservableList<Patient> loadAllPatientList() {
        try {
            Connection connection = DatabaseConnection.getConnection();
            this.data = FXCollections.observableArrayList();

            ResultSet resultSet = connection.createStatement().executeQuery(patientsql);

            while (resultSet.next()) {
                this.data.add(
                        new Patient(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getString(9),
                        resultSet.getString(10)));
            }
            return this.data;
        } catch (SQLException ex) {
            ex.printStackTrace();
        }









        return this.data;

    }


}


