package com.example.dbtest.data

class User {
    var username = ""
    var fullname= ""
    var correo = ""
    var isActive = true

    constructor(username: String ,correo: String, isActive: Boolean){
        this.username = username
        this.correo= correo
        this.isActive = isActive
    }
}