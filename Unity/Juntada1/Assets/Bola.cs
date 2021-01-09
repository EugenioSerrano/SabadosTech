using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bola : MonoBehaviour {

	int VelocidadX;
	int VelocidadY;

	public float VelocidadGeneral;

	// Use this for initialization
	void Start () {
		VelocidadX = Random.Range (0, 2);
		if (VelocidadX == 0) {
			VelocidadX = 1;
		} else {
			VelocidadX = -1;
		}

		VelocidadY = Random.Range (0, 2);
		if (VelocidadY == 0) {
			VelocidadY = 1;
		} else {
			VelocidadY = -1;
		}

		GetComponent<Rigidbody>().velocity = new Vector3(VelocidadGeneral*VelocidadX, VelocidadGeneral*VelocidadY, 0);
	}

	// Update is called once per frame
	void Update () {
		
	}
}
