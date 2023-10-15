export default interface Service<T> {
  execute(...param: any): Promise<T>;
}