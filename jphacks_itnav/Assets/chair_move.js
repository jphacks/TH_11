#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (myKenti : Collider) {
  if(myKenti.gameObject.name == "ThirdPersonController"){
    GameObject.Find("gofa_chair").gameObject.SendMessage("Fly");
  }
} 