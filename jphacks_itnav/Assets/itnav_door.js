#pragma strict

var Opn:boolean = false;

function Start () {

}

function Update () {

}

function DoorOpen () {
  iTween.MoveBy(gameObject, {"x":20, "easeType":"easeInOutExpo", "loopType":"none", "delay":.1});
}

function DoorClose () {
  iTween.MoveBy(gameObject, {"x":-20, "easeType":"easeInOutExpo", "loopType":"none", "delay":.1});
}
