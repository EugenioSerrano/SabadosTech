using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour {
	public KeyCode Arriba;
	public KeyCode Abajo;

	public float Velocidad; 
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
		if (Input.GetKey (Arriba) && transform.position.y <= 4) {
			transform.Translate (0, Velocidad, 0);
		}
		if (Input.GetKey (Abajo) && transform.position.y >= -4) {
			transform.Translate (0, Velocidad*-1, 0);
		}
	}
}
