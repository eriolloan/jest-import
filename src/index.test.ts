import { getAttribute } from "fs-xattr";

describe('module export', ()=>{
	it('should be imported', ()=>{
		expect(getAttribute).toBeDefined()
	})
})