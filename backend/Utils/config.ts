class Config{
    public webPort = 8080;
    public webHost = 'localhost';
    public mySQLhost = 'localhost';
    public mySQLuser = 'root';
    public mySQLpassword = '12345678';
    public mySQLdb = 'fishfarm';
}

const config = new Config();
export default config;