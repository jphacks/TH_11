#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (){
  GameObject.Find("itnav_door").gameObject.SendMessage("DoorOpen");
}

function OnTriggerExit (){
  GameObject.Find("itnav_door").gameObject.SendMessage("DoorClose");
}