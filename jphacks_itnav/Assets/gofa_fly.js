#pragma strict

function Start () {

}

function Update () {

}

function Fly () {
  iTween.MoveBy(gameObject, {"y":10, "easeType":"easeInOutExpo", "loopType":"none", "delay":.1});
}
