#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (myKenti : Collider) {
  if(myKenti.gameObject.name == "FPSController"){
    GameObject.Find("gofa_chair").gameObject.SendMessage("Fly");
  }
} 