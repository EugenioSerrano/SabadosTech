using System.Collections;
using System.Collections.Generic;
using System;
using UnityEngine;

public class Player : MonoBehaviour {
 
	public KeyCode KeyUp;
	public KeyCode KeyDown;

	public float Speed; 


	private DateTime _lastKeyRefresh;

	// Use this for initialization
	void Start () {
		_lastKeyRefresh = DateTime.Now.AddSeconds(-10);		
	}
	
	// Update is called once per frame
	void Update () {
		
		if ((DateTime.Now - _lastKeyRefresh).Milliseconds >= 11 - Speed){
			_lastKeyRefresh = DateTime.Now;
			if (Input.GetKey (KeyUp) && transform.position.y <= 4) {
				transform.Translate (0, 0.1f, 0);
			}
			if (Input.GetKey (KeyDown) && transform.position.y >= -4) {
				transform.Translate (0, -0.1f, 0);
			}
		}
	}
}
