// 一. 逻辑测试
for (let i = 100; i < 1000; i++) {
    // 检查条件1
    if (i.toString().split('').filter((digit, index) => digit === '2' && index === 1).length === 1) {
        // 检查条件2
        const num692 = '692';
        if (num692.split('').filter((digit, index) => digit === i.toString()[index]).length === 0 &&
            num692.split('').filter(digit => i.toString().includes(digit)).length === 2) {
            // 检查条件3
            if (/^(?!.*1)(?!.*7)(?!.*4).*$/g.test(i)) {
                // 检查条件4
                const num419 = '419';
                if (num419.split('').filter(digit => i.toString().includes(digit)).length === 1) {
                    console.log(i);
                }
            }
        }
    }
}

// web3开发入门