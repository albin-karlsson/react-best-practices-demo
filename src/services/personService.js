class personManager {
  determineDrivingPermission(person) {
    if (person.age >= 18) {
      return true;
    }
    return false;
  }
}
