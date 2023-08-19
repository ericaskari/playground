package loginpackage.dbUtil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private static final String USERNAME = "dbuser";
    private static final String PASSWORD = "dbpassword";
    private static final String SQCONN   = "jdbc:sqlite:PatientList.sqlite";

    private static final String MYSQLUSERNAME = "root";
    private static final String MYSQLPASSWORD = "Hashem741";
    private static final String MYSQLCONN =  "jdbc:mysql://localhost:3306/mysql?autoReconnect=true&useSSL=false";

    private static final String MYSQL_GOOGLE_USERNAME = "mysql.sys";
    private static final String MYSQL_GOOGLE_PASSWORD = "Hashem741";
    private static final String MYSQL_GOOGLE_MINE = "jdbc:mysql://35.228.119.107/patientlist?useSSL=false";
    private static final String MYSQL_GOOGLE =  "jdbc:mysql://google/%s?cloudSqlInstance=%s&socketFactory=com.google.cloud.sql.mysql.SocketFactory&useSSL=false";
    private static final String MYSQL_GOOGLE_INSTANCE_CONN_NAME = "second-jet-216010:europe-north1:mhdaska";
    private static final String MYSQL_GOOGLE_PRIMARY_IP_ADDR = "35.228.119.107";
    private static final String MYSQL_GOOGLE_DATABASE_NAME = "patientlist";


    //Connection connection = DriverManager.getConnection(jdbcUrl, MYSQL_GOOGLE_USERNAME, MYSQL_GOOGLE_PASSWORD);


    public static Connection getConnection() throws SQLException {
        
        String instanceConnectionName = "second-jet-216010:europe-north1:mhdaska";
        String databaseName = "patientlist";
        String username = "root";
        String password = "Hashem741";
        String jdbcUrl = String.format(
                "jdbc:mysql://google/%s?cloudSqlInstance=%s"
                        + "&socketFactory=com.google.cloud.sql.mysql.SocketFactory&useSSL=false",
                databaseName,
                instanceConnectionName);



        try {
                    //Class.forName("org.sqlite.JDBC");
                    Class.forName("com.mysql.cj.jdbc.Driver");
                    //return DriverManager.getConnection(SQCONN);
                    return DriverManager.getConnection(MYSQLCONN, MYSQLUSERNAME, MYSQLPASSWORD);
                    //return DriverManager.getConnection(MYSQL_GOOGLE_MINE, MYSQL_GOOGLE_USERNAME, MYSQL_GOOGLE_PASSWORD);
                    //return DriverManager.getConnection(jdbcUrl, username, password);

                } catch (ClassNotFoundException ex) {
                    ex.printStackTrace();
                }
                return null;
            }


}
