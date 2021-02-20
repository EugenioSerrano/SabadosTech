import 'package:flutter/material.dart';
//import 'package:flutter/services.dart';

class Calculadora2Page extends StatefulWidget {
  Calculadora2Page({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _Calculadora2State createState() => _Calculadora2State();
}

class _Calculadora2State extends State<Calculadora2Page> {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('App Name'),
      ),
      body: new Container(
        child: new Column(
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.max,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              new Text(
                "15488.11",
                style: new TextStyle(
                    fontSize: 42.0,
                    color: const Color(0xFF000000),
                    fontWeight: FontWeight.w400,
                    fontFamily: "Roboto"),
              ),
              new Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "7",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "8",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "9",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "/",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        ))
                  ]),
              new Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "4",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "5",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "6",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "*",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        ))
                  ]),
              new Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "1",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "2",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "3",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "-",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        ))
                  ]),
              new Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "0",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "+",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "=",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        )),
                    new RaisedButton(
                        key: null,
                        onPressed: buttonPressed,
                        color: const Color(0xFFe0e0e0),
                        child: new Text(
                          "C",
                          style: new TextStyle(
                              fontSize: 30.0,
                              color: const Color(0xFF000000),
                              fontWeight: FontWeight.w400,
                              fontFamily: "Roboto"),
                        ))
                  ])
            ]),
        padding: const EdgeInsets.all(20.0),
        alignment: Alignment.center,
      ),
    );
  }

  void buttonPressed() {}
}
