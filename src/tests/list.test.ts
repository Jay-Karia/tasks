import { getListOwner, isMyList } from "@/lib/list"

describe("list()", () => {
    it("can detect invalid id", ()=> {
        expect(getListOwner("invalidId")).toEqual(null)
    })
})