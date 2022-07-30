package com.example.dbtest

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import com.android.volley.Request
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import com.example.dbtest.data.User


class userTest : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_user_test)
        val btnButton = findViewById<Button>(R.id.button)
        btnButton.setOnClickListener{
            getUsers()
        }
    }

    private fun getUsers() {
        val tVResultado = findViewById<TextView>(R.id.Resultado)
        val tVNombre = findViewById<TextView>(R.id.textView)
        val tVCorreo = findViewById<TextView>(R.id.textView2)
        val tVEdad = findViewById<TextView>(R.id.textView3)
        // val appId = ?
        val url  = "http://10.0.2.2:3000/api/v1/users"
        val queue = Volley.newRequestQueue(this)

        val jsonObjectRequest = JsonObjectRequest(
            //Crea el metodo Get para obtener información de la API
            Request.Method.GET, url, null,
            {
                //Muestra un mensaje
                Toast.makeText(this, "Data Received", Toast.LENGTH_LONG).show()
                tVResultado.text = "Data Received"

                val datos = it.getJSONObject("data")

                //   val weather = Weather()



                    Log.d("dbTest", it.toString())
                //    textViewInfoCiudad.text = datos.toString()
                val username = datos.getString("username")
                val Correo = datos.getString("email")
                val isActive = datos.getBoolean("isActive")


                var user = User(username,Correo, isActive)
                tVNombre.text = user.username.toString()
                tVCorreo.text =  user.correo.toString()
                tVEdad.text =  user.isActive.toString()



                //  textViewInfoCiudad.text = datos.getString("temp")

            }, {
                   Log.d("dbTEST Error", it.toString())
                Toast.makeText(this, "Request not found", Toast.LENGTH_LONG).show()
                tVResultado.text = "Request not found  ITA"
            }
        )

        queue.add(jsonObjectRequest)
        Toast.makeText(this,"Getting Info", Toast.LENGTH_LONG).show()
        tVResultado.text = "Getting info"
    }


}